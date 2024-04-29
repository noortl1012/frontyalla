resource "azurerm_app_service_plan" "frontend_app_service_plan" {
  name                = "frontend-app-service-plan"
  location            = azurerm_resource_group.rg.location
  resource_group_name = azurerm_resource_group.rg.name

  sku {
    tier = "Basic"  # Update with your desired pricing tier (e.g., Basic, Standard, Premium)
    size = "B1"     # Update with your desired instance size within the tier
  }
 
}
resource "azurerm_app_service" "frontend_app_service" {
  name                = "frontend-app-service"
  location            = azurerm_resource_group.rg.location
  resource_group_name = azurerm_resource_group.rg.name

  app_service_plan_id = azurerm_app_service_plan.frontend_app_service_plan.id

  site_config {
    # Specify the runtime stack and version (e.g., Node.js, Python, .NET Core)
    # Adjust based on your front-end application's technology stack
    linux_fx_version = "NODE|14"
  }
}

resource "azurerm_app_service_virtual_network_swift_connection" "frontend_app_service_connection" {
  app_service_id     = azurerm_app_service.frontend_app_service.id
  subnet_id          = azurerm_subnet.frontend_subnet.id
}

