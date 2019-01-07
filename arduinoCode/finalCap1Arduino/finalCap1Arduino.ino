
#include <SoftwareSerial.h>
//
//#include <ESP8266HTTPClient.h>
//#include <ESP8266WiFi.h>
//
//const char* ssid = "atltechvillage";
//const char* password = "beniceanddreambig";

//SoftwareSerial esp8266SerialPort(0, 1);


int trigPin = 13;
int echoPin = 12;
int ledPin = 10;
int hornPin = 11;
int feather = 8;

int spaceIntruded;

long duration, cm, inches;

void setup() {
//  Serial.begin(115200);
//  WiFi.begin(ssid, password);
//
//  while(WiFi.status() != WL_CONNECTED) {
//    delay(500);
//    Serial.println("Waiting for connection");
//  }

  Serial.begin (9600);
  pinMode(trigPin, OUTPUT);
  pinMode(echoPin, INPUT);
  pinMode(ledPin, OUTPUT);
  pinMode(hornPin, OUTPUT);
  pinMode(feather, OUTPUT);
  delay(5000);
  Serial.println("Armed...");
  
}

void loop() {

//  if (WiFi.status() == WL_CONNECTED) {
//    HTTPClient http;
//    Serial.println("yay connect");
//
//    http.begin("http://10.150.40.121:3000/");
//    http.addHeader("Content-Type", "text/plain");
//    
//    int httpCode = http.POST("Message from ESP8266");
//    String payload = http.getString();
//    Serial.println(payload);
//    http.end();
//    
//    } else {
//      Serial.println("Error in Wifi connection");
//      
//    }
  digitalWrite(trigPin, LOW);
  delayMicroseconds(1);
  digitalWrite(trigPin, HIGH);
  delayMicroseconds(2);
  digitalWrite(trigPin, LOW);
  pinMode(echoPin, INPUT);
  duration = pulseIn(echoPin, HIGH);

  inches = (duration / 2) / 74;
  Serial.println(inches);

  spaceIntruded = inches;
  
  if (spaceIntruded <= 50 || spaceIntruded >= 1000){
      digitalWrite(ledPin, HIGH);
      digitalWrite(hornPin, HIGH);
      Serial.println("Intruder Detected!");
      Serial.println("Sending text Notification...");
      delay(500);
      Serial.println("Armed...");
  }
  
  else{
    digitalWrite(hornPin, LOW);
    digitalWrite(ledPin, LOW);
  }

   if (spaceIntruded <= 50) {
      digitalWrite(feather, HIGH);
      delay(3000);
      digitalWrite(feather, LOW);
      delay(100);
    }
//    delay(30000);
 
}
