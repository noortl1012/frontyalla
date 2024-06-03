
resource "azurerm_app_service_plan" "nest_app_service_plan" {
  name                = "my-nest-app-service-plan"
  location            = azurerm_resource_group.rg.location
  resource_group_name = azurerm_resource_group.rg.name
  sku {
    tier = "Standard"
    size = "S1"
  }
  kind     = "Linux"    # Specify the OS type as Linux
  reserved = true       # Required for Linux
}


resource "azurerm_app_service" "nest_app_service" {
  name                  = "my-nest-app-service-name"
  location            = azurerm_resource_group.rg.location
  resource_group_name = azurerm_resource_group.rg.name
   app_service_plan_id = azurerm_app_service_plan.nest_app_service_plan.id
  
  
  site_config {
    always_on = true
    # Add other site configurations as needed
    linux_fx_version = "NODE|21.6"
  }

   app_settings = {
    "WEBSITE_NODE_DEFAULT_VERSION" = "21.6.0",  # Specify Node.js version for backend
    "WEBSITE_RUN_FROM_PACKAGE"     = "https://mystoragenour.blob.core.windows.net/backcontainer?sp=r&st=2024-06-03T22:23:33Z&se=2024-06-04T06:23:33Z&spr=https&sv=2022-11-02&sr=c&sig=YODlgWQzavCCtZf6hcJO%2BRG5w1fLQN9jm9aqp9JcHtw%3D",
    # Add other app settings as needed
  }
   
}
# Establish the virtual network integration for the Nest.js App Service
resource "azurerm_app_service_virtual_network_swift_connection" "nest_app_service_connection" {
  app_service_id = azurerm_app_service.nest_app_service.id
  subnet_id      = azurerm_subnet.backend_subnet.id  
}
