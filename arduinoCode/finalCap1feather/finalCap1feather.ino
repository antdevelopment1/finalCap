
    #include <SoftwareSerial.h>
    
    #include <ESP8266HTTPClient.h>
    #include <ESP8266WiFi.h>
    
    const char* ssid = "atltechvillage";
    const char* password = "beniceanddreambig";
    
    HTTPClient http;
    
    void setup() {
      Serial.begin(115200);
      pinMode(LED_BUILTIN, OUTPUT);
      
      WiFi.begin(ssid, password);
    
      while(WiFi.status() != WL_CONNECTED) {
        delay(100);
        Serial.println("Waiting for connection");
      }
      
    }
    
    void loop() {

        int adcvalue = analogRead(A0);
    
      if (WiFi.status() == WL_CONNECTED) {
        
            Serial.println("Connected to wifi network");
    
            http.begin("http://10.150.40.54:3000/");
            http.addHeader("Content-Type", "application/x-www-form-urlencoded");
            
            int httpCode = http.POST("success=Wifi Network is connected");
            String payload = http.getString();
            Serial.print(payload);
            Serial.print(payload);
            Serial.print(payload);
            Serial.print(payload);
            
            http.end();
            
        } else {
            Serial.println("Error in Wifi connection"); 
        }
     
        if (adcvalue > 850) {
              Serial.println("Intruder detected. Please check your belongings.");
              Serial.print("My current analog value value is ");
              Serial.println(adcvalue);
              http.begin("http://10.150.40.54:3000/intruder");
              http.addHeader("Content-Type", "application/x-www-form-urlencoded");
              int httpCode = http.POST("Intruder=Someone has triggered the alarm. Please check valuables: hello");
              String payload = http.getString();
              http.end();
          } else if (adcvalue < 850) {
            Serial.println("System is armed");
            Serial.print("My adc value is ");
            Serial.println(adcvalue);
          } 
          
        delay(1000);
     
    }
    
