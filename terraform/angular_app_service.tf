
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
  name                = "my-frontend-app-service-123"
  location            = azurerm_resource_group.rg.location
  resource_group_name = azurerm_resource_group.rg.name

  app_service_plan_id = azurerm_app_service_plan.frontend_app_service_plan.id

  site_config {
    # Specify the runtime stack and version (e.g., Node.js, Python, .NET Core)
    # Adjust based on your front-end application's technology stack
  
  }

  app_settings = {
    "WEBSITE_RUN_FROM_PACKAGE"     = "https://mystoragenour.blob.core.windows.net/frontcontainer?sp=r&st=2024-06-03T22:26:11Z&se=2024-06-04T06:26:11Z&spr=https&sv=2022-11-02&sr=c&sig=ICZH%2Fe3hop8gX4mC%2FChOJq7xYjBftyzE0khvl40Qn58%3D",
    # Add other app settings as needed
  }
  
}

resource "azurerm_app_service_virtual_network_swift_connection" "frontend_app_service_connection" {
  app_service_id     = azurerm_app_service.frontend_app_service.id
  subnet_id          = azurerm_subnet.frontend_subnet.id
}
