
    #include <SoftwareSerial.h>
    
    #include <ESP8266HTTPClient.h>
    #include <ESP8266WiFi.h>
    
    const char* ssid = "ENDOWED Underwear";
    const char* password = "endowwear";
    
    HTTPClient http;
    
    void setup() {
      Serial.begin(115200);
      
      WiFi.begin(ssid, password);
    
      while(WiFi.status() != WL_CONNECTED) {
        delay(10);
        Serial.println("Waiting for connection");
      }
      
    }
    
    void loop() {

        int adcvalue = analogRead(A0);
//        Serial.println("My analog value is ");
//        Serial.println(adcvalue);
    
      if (WiFi.status() == WL_CONNECTED) {
        
            Serial.println("Connected to wifi network");
    
            http.begin("http://10.150.40.121:3000/");
            http.addHeader("Content-Type", "application/x-www-form-urlencoded");
        
            int httpCode = http.POST("hey");
            String payload = http.getString();
            http.end();
            
        } else {
            Serial.println("Error in Wifi connection"); 
        }
    
        if (adcvalue > 850) {
              Serial.println("Intruder detected. Please check your belongings.");
              Serial.println("My adc value is ");
              Serial.print(adcvalue);
              http.begin("http://10.150.40.121:3000/home");
              http.addHeader("Content-Type", "text/plain");
              int httpCode = http.POST("Message from ESP8266");
              String payload = http.getString();
              Serial.println(payload);
              http.end();
          } else if (adcvalue < 850) {
            Serial.println("System is armed");
            Serial.println(adcvalue);
          } 
          
        delay(1);
     
    }
    