/* JSON, JavaScript Object Notation. JavaScript Nesne Gösterimi anlamına gelir.
* Bir tarayıcı ile sunucu arasında veri alışverişi yaparken verilerin metin biçiminde olması gerekir. JSON bir sunucu ile bir
 web uygulaması arasında veri iletmek için kullanılan standart okunabilir bir dosya biçimidir ve XML’e güçlü bir alternatiftir.
 * JSON bütün popüler programlama dilleri ile kolayca kullanılabilir.
 * JSON Nesneleri süslü parantez “{}” ile başlar ve biter, anahtar / değer çiftleriyle yazılmıştır. Anahtarlar string(metin) ve 
 değerler geçerli JSON veri türleri olmalıdır: string, number, object, array, true, false, null gibi.
 * JSON, diğer açık veri alışverişi seçenekleriyle karşılaştırıldığında küçüktür ve kullanımı kolaydır.
 * Bir tarayıcı veya yerel mobil uygulama ile iletişim kuran bir yazılım yazıyorsanız, veri biçimi olarak JSON'u kullanmalısınız. 
 XML gibi bir biçim kullanmak, güncelliğini yitirmiş bir seçimdir ve yavaştır.
 * JSON, web sunucuları ile tarayıcılar ve mobil uygulamalar arasında veri göndermek için her yerde kullanılabilen bir biçimdir. Basit tasarımı ve esnekliği, 
  okumayı ve anlamayı kolaylaştırır ve çoğu durumda, seçtiğiniz programlama dilinde manipüle edilmesini kolaylaştırır.
  Katı bir şemanın olmaması, formatın esnekliğini sağlar, ancak bu esneklik bazen JSON'u düzgün bir şekilde okuyup yazmanızı sağlamayı da zorlaştırabilir.*/


/* HTML DOM (Document Object Model) 
* Türkçe karşılığı Belge Nesne Modelidir. 
* İnternet tarayıcıları girilen internet sitesini bir belge, bu belge (sayfa) içerisinde bulunan tüm elemanları da nesne olarak kabul eder. Buna göre resim, yazı, 
form gibi tüm elemanlar nesnedir. İşte DOM sayfa içindeki herhangi bir nesnenin özelliğine 
müdahale edebilmemize, nesne özelliklerini değiştirebilmemize olanak sağlar. Bunu yapabilmek için de JavaScript gibi bazı script dilleri kullanmamız gerekir.
*  DOM, HTML, XML gibi belgelerin diğer programlama dilleri veya script dilleriyle iletişim kurabilmesi için bir arabirimdir.
* DOM da nesnelerin birer öğe (element) olarak kullanılabilmesi için hiyerarşik bir düzen izlenerek çağrılmaları gerekir. 
HTML’deki her bir elemanın birbiri ile hiyearşik bir yapı oluşturması ile oluşur.
NOT:  HTML bir dil değildir, bir arayüzdür. Javascript, VBscript, vs .. ise birer dildir.
*DOM bir ağaç dizini gibi bütün dokümanları birbirine bağlar. Birden fazla programlama dillerini destekler(JS, PHP, Java, ASP vb.) ve aynı zamanda dosya oluşturmak,
 elementleri ve içeriklerini silme/ekleme gibi fonsiyonları vardır.

 Nasıl kullanılır? (Örnek)
 Sayfada bulunan bir resim nesnesi üzerinde fare üzerine getirilince kırmızı bir kenarlık, 
 fare üzerinden çekilince mavi bir kenarlık olması istendiğinde, bunun tarayıcıya yaptırılabilmesi için iki şekilde kod yazılabilir.
 
 1. yöntem
 Doğrudan resim nesnesinin etiketi üzerinde script çalıştırılabilir.
   <img src="resim.jpg" border="1" onMouseOver="this.style.border='1px solid red'" onMouseOut="this.style.border='1px solid blue'">

2. Yöntem

İlk olarak web sayfasımızın  herhangi bir yerine aşağıdaki betiğin yazılması gerekir.
<script type="text/javascript">

  function kirmizi(){

    document.resim.style.border='1px solid red';

  }

  function mavi(){

    document.resim.style.border='1px solid blue';

  }

  </script>


   Daha sonra resim üzerinde yukarıdaki scriptin çalıştırılabilmesi için onMouseOver ve onMouseOut uygulamalarının kullanılması yeterli olacaktır.
   Script resim isimli nesneyi bularak yapılması gereken müdahaleyi yapacaktır.


    <img src="resim.jpg" border="1" name="resim" onMouseOver="kirmizi()" onMouseOut="mavi()">

*/



 console.log(window)   /*  JS'nin en temel objesi(nesne) =window, JSON formatındadırlar */

console.log(document)   

person = {name:"John", age:31, city:{name:"Kansas", pop:3000}}; // person bir nesne, city özelliği de bir nesne olabilir(name, age,city Property(özellik)) JSON verisi
                                                                 /* Verileri çekmek için kullanıcaz */




/* class Person
{}
public string Name{get; set;} C# ta property 

}*/

let value

value = document;
 //dom objeleri listelenir.
value=document.all.length;
value =document.all; /* Kullanımdan kaltığı için üstü çizili */
value = document.all[6];
value = document.all[document.all.length-1];
 console.log(value)    // JS'de htmtl sayfaları dom olarak tanımlanır,html de etiket(element)denir, etiketler js'de dom objesidir. 


 const elements = document.all;
  //Html collection
  for (let i = 0; i < elements.length; i++) {
      console. log(elements[i]);
      
  }

  const collections= Array.from(document.all) // Arraye çevirdik


  collections.forEach(function(collection){
      console.log(collection)
  });

  value = document.body 
  value = document.location
  value = document.location.port
  value = document.location.hostname
  value = document.URL
  value = document.character

  console.log(value)
 

