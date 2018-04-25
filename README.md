# Alert-system
	โปรเจคของเราทำอุปกรณ์ที่คอยเตือนว่าบ้านคุณเกิดปัญหาใดๆ หรือไม่ผ่านเว็บไซต์
# How to use
	อุปกรณ์ที่ต้องการมี 5 ตัว 
	

[![arduino-uno.jpg](https://s14.postimg.cc/jaucjhdhd/arduino-uno.jpg)](https://postimg.cc/image/5txe0m35p/)<br>
1.) Arduino Uno<br>

2.) NodeMCU
[![Node_MCU.jpg](https://s14.postimg.cc/kd4j26975/Node_MCU.jpg)](https://postimg.cc/image/iy2ydg83x/)<br>

3.) PIR Infrared Sensor
[![adjustable-pir-motion-sensor.jpg](https://s14.postimg.cc/ls63qqa8h/adjustable-pir-motion-sensor.jpg)](https://postimg.cc/image/h69zidop9/)<br>

4.) DS3231 Temperature sensor
[![ds3231_rtc_module-800x800.jpg](https://s14.postimg.cc/z9329p7q9/ds3231_rtc_module-800x800.jpg)](https://postimg.cc/image/66os6vlgd/)<br>

5.) MQ2 Gas sensor
[![MQ2_Gas_Sensor_Module.jpg](https://s14.postimg.cc/ckdva5sxd/MQ2_Gas_Sensor_Module.jpg)](https://postimg.cc/image/l2nbehzfx/)<br>

# Install & Setup Website Alert-system
1.) download หรือ clone project<br>
2.) cd front-end และ ต่อด้วย yarn install , yarn buld

# Run
yarn dev 
ตัวเว็บไซด์จะไปที่ localhost:3000

ถ้าเข้าได้แล้วจะเจอหน้าตาเว็บไซด์แบบนี้

[![Screen_Shot_2561-04-22_at_13.57.30.png](https://s14.postimg.cc/5fw20mlip/Screen_Shot_2561-04-22_at_13.57.30.png)](https://postimg.cc/image/4dlvi32p9/)

หน้าตาของ Dashboard หลังจากสมัครสมาชิก และ login เข้ามา

[![Screen_Shot_2561-04-22_at_13.55.32.png](https://s14.postimg.cc/t6vfiq6a7/Screen_Shot_2561-04-22_at_13.55.32.png)](https://postimg.cc/image/i7a874fv1/)

Stack เทคโนโลยีที่เราใช้ทั้งหมดในส่วนของ Website

[![alert-system-stack.jpg](https://s14.postimg.cc/mvq82hkj5/alert-system-stack.jpg)](https://postimg.cc/image/5ifxnmp7x/)
=======
	โหลดโปรแกรม Arduino จากเว็บไซต์

https://www.arduino.cc/en/Main/Software 
	
	จากนั้นลง Library ในโฟลเดอร์ Library และโหลดโค้ด 2 อันจากโฟลเดอร์ testarduino2 และ testnode2 ลงไป
	และอัพโหลดขึ้น Arduino และ NodeMCU ที่ต่อกันอย่างนี้
	
[![31091887_2058467804479556_2269690877913858048_n.jpg](https://s14.postimg.cc/86ekpap9d/31091887_2058467804479556_2269690877913858048_n.jpg)](https://postimg.cc/image/5cbfbun31/)
[![jjio.jpg](https://s14.postimg.cc/3kiggze0x/jjio.jpg)](https://postimg.cc/image/gbwmnhnst/)
[![31206657_2058467817812888_7663271934481661952_n.jpg](https://s14.postimg.cc/qyqfswgip/31206657_2058467817812888_7663271934481661952_n.jpg)](https://postimg.cc/image/i3plidrq5/)
[![31052180_2058467811146222_615496022134620160_n.jpg](https://s14.postimg.cc/llx01ht35/31052180_2058467811146222_615496022134620160_n.jpg)](https://postimg.cc/image/5aww56gl9/)
[![30724862_2058467827812887_2750114731254611968_n.jpg](https://s14.postimg.cc/ce4rkrr5t/30724862_2058467827812887_2750114731254611968_n.jpg)](https://postimg.cc/image/tenntg471/)
[![31100299_2058467787812891_4528253413959401472_n.jpg](https://s14.postimg.cc/6elluet1t/31100299_2058467787812891_4528253413959401472_n.jpg)](https://postimg.cc/image/hqy7c71ql/)

	และเชื่อมต่อกับ Firebase จากนั้นก็หาที่ไว้เหมาะๆ และต่อไฟได้เลย
