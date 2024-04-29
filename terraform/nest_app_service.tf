
resource "azurerm_app_service_plan" "nest_app_service_plan" {
  name                = "my-nest-app-service-plan"
  location            = azurerm_resource_group.rg.location
  resource_group_name = azurerm_resource_group.rg.name
  sku {
    tier = "Standard"
    size = "S1"
  } 
}


resource "azurerm_app_service" "nest_app_service" {
  name                  = "my-nest-app-service-name"
  location            = azurerm_resource_group.rg.location
  resource_group_name = azurerm_resource_group.rg.name
   app_service_plan_id = azurerm_app_service_plan.nest_app_service_plan.id
  
  
  site_config {
    always_on = true
    # Add other site configurations as needed
  }

   app_settings = {
    "WEBSITE_NODE_DEFAULT_VERSION" = "14.17.0",  # Specify Node.js version for backend
    "WEBSITE_RUN_FROM_PACKAGE"     = "<URL_TO_YOUR_NESTJS_PACKAGE>",
    # Add other app settings as needed
  }
   
}
# Establish the virtual network integration for the Nest.js App Service
resource "azurerm_app_service_virtual_network_swift_connection" "nest_app_service_connection" {
  app_service_id = azurerm_app_service.nest_app_service.id
  subnet_id      = azurerm_subnet.backend_subnet.id  
}