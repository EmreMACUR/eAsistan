# eAsistan
Merhaba,
  
  Öncelikle projenin amacından bahsetmek istiyorum. Bu proje öğretmenler ve öğrenciler arasında mobil bir köprü olması amacıyla tasarlanmıştır. Öğrenciler ders listesinden istedileri dersin üzerine dokunarak ders notlarına, örek sorulara ve çözümlerine ulaşabilecek aynı zamanda öğretmenlerine dersle alakalı sorularını da iletebileceklerdir.
  Boş bir ionic(v3.19.0) projesi olarak başlatılan bu proje typescript ile yazılmıştır. Proje yapısını inceleyecek olursak;

**pages

-home (Bu sayfada ders listesi olacak. Öğrenci listeden tıkladığı ders "Döküman linklerine git" ve "Öğretmene soru sor" gibi iki seçenek görecek.)

-download-doc (Bu sayfada ise ders notlarının ve örnekk ve çözümlerin bulunduğu linkler bulunmakta. Listede indirmek istenen link öğesinin üzerine tılayarak indirme işlemi yapılabilir.)

-send-message(Bu sayfada ise öğretmene mesaj gönderilebilir ve gelen mesajları görüntülenebilir.)


**objects

-downloadLinks (Dökümanlar indirme için kullanılacak nesnedir. İsim ve url bilgisi bulunur. )

-lesson (Ders nesnesi. Ders adı, öğretmen id, öğretmen adı ve soyadı, ders credisi,not linkleri,soru linkleri gibi bilgiler bulunur. )

-message (Mesaj nesnesi. Mesaj içeriği,gönderenin id si, göndericinin kim olduğu, dersin id si gibi bilgiler bulunur.)

-user (Kullanıcı nesnesi. Kullanıcı id si ,ad , soyad , yaş , sınıf ve özel alan gibi bilgiler bulunur.


**mocks(tempdata)

-mock-lessons (Örnek ders dataları bulunur.)

-mock-messages (Örnek mesaj dataları bulunur.)

-mock-user (Örnek kullanıcı dataları bulunur.)


**services

-docDownloadService (Döküman indirme işlemi için yazılan servis.)

-lessonsService (Derslerin getirildiği servis.)

-messageService(Mesajların getirildiği ve gönderildiği servis.)

-userService (Kullanıcı bilgilerinin getirildii servis.)



  Görüldüğü üzere tüm datalar servisler yardımı ile uygulama içerisine gömülmüş temp datalardan alınmıştır. Uygulamanın asıl halinde  servislerden gerekli api veya servislere gidilmeli ve getirilecek olan datalar daha detaylı olmalıdır.Gerçek bir uygulama olması durumunda mongoDb veritabanı olarak kullanılabilir. MongoDb nin nossql tabanına kurulan yapısı bizim için çok faydalı olacaktır.Yazılıcak olan api ve servisler de ise NodeJs ile kullanılabilir.


Bundan sonraki süreçte yapılabilecek geliştirmeler ve projenin detaylandırılması;
  Yapılacak olan ilk işlem mesajlaşma sayfasının gerçek bir socket ile canlı bir mesajlaşma uygulaması gibi çalışması. Mesaj gönderimi sadece text ile sınırlı değilde fotağraf,ses kaydı veya video gönderimi gibi gelişmiş bir yapıda olmalı. Döküman indirme sayfasında sadece console ekranına mesaj girilmiştir fakat gerçek bir projede bu kısımda verilen linklerdeki dökümanlar pluginler yardımı ile cihazın hafızasına kaydedilebilir. İlerleyen süreçte öğrenci notları, derslere devam durumları gibi özellikler uygulamaya entegre edilebilir. Hatta anlık sınavlar bile uygulma üzerinden yapılabilir.




Kurulum ve çalıştırma;

$ git clone https://github.com/EmreMACUR/eAsistan.git 

$ ionic serve







