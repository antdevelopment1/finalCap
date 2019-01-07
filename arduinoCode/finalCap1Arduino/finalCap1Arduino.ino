
#include <SoftwareSerial.h>

int trigPin = 13;
int echoPin = 12;
int ledPin = 10;
int hornPin = 11;
int feather = 8;

int spaceIntruded;

long duration, cm, inches;

void setup() {

  Serial.begin (9600);
  pinMode(trigPin, OUTPUT);
  pinMode(echoPin, INPUT);
  pinMode(ledPin, OUTPUT);
  pinMode(hornPin, OUTPUT);
  pinMode(feather, OUTPUT);
  Serial.println("Armed..."); 
}

void loop() {
  
  digitalWrite(trigPin, LOW);
  delayMicroseconds(1);
  digitalWrite(trigPin, HIGH);
  delayMicroseconds(2);
  digitalWrite(trigPin, LOW);
  pinMode(echoPin, INPUT);
  duration = pulseIn(echoPin, HIGH);

  inches = (duration / 2) / 74;

  spaceIntruded = inches;
  
  if (spaceIntruded <= 50 || spaceIntruded >= 1000){
      digitalWrite(ledPin, HIGH);
      digitalWrite(hornPin, HIGH);
      Serial.println("Intruder Detected!");
      Serial.print("Intruder dected at ");
      Serial.print(spaceIntruded);
      Serial.println(" inches away");
      Serial.println("Sending text Notification...");
  }
  
  else{
    digitalWrite(hornPin, LOW);
    digitalWrite(ledPin, LOW);
  }

   if (spaceIntruded <= 50) {
      digitalWrite(feather, HIGH);
      delay(10000);
      digitalWrite(feather, LOW);
      delay(100);
      Serial.println("System is now armed again...");
  }

}
