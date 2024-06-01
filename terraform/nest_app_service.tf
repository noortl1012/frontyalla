
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
    "WEBSITE_RUN_FROM_PACKAGE"     = "https://storageangular.blob.core.windows.net/backcontainer?sp=rl&st=2024-05-30T21:31:48Z&se=2024-05-31T05:31:48Z&spr=https&sv=2022-11-02&sr=c&sig=POv0hA23trZSCFssmxeizT19H2%2BLZB%2BY2wU%2B7B8ZTiY%3D",
    # Add other app settings as needed
  }
   
}
# Establish the virtual network integration for the Nest.js App Service
resource "azurerm_app_service_virtual_network_swift_connection" "nest_app_service_connection" {
  app_service_id = azurerm_app_service.nest_app_service.id
  subnet_id      = azurerm_subnet.backend_subnet.id  
}
