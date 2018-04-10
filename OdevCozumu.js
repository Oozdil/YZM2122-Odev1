var rastgele_sayilar;
var hedef_sayi;
var BirinciHesapListesi;
var IkinciHesapListesi;
var BulunanEnIyiSonuc;
var sonuc;
var sonuc_tipi;
var sonuc_bulundu;
 var hassasiyet=9;

//Rastgele Sayıları uretiyoruz
function RastgeleSayiUret() {
    rastgele_sayilar=new Array();
	var rastgele=0;
	for(var i =0;i<5;i++)
	{
		rastgele=Math.floor(Math.random() * 9) + 1;
		rastgele_sayilar[i]=rastgele;	
	}	
	rastgele=1;
	while(rastgele %10 !=0 )
	{
		rastgele=Math.floor(Math.random() * 90) + 9;
		rastgele_sayilar[5]=rastgele;
	}	
	rastgele=1;
	while(rastgele <100 )
	{
		rastgele=Math.floor(Math.random() * 900) + 99;
		hedef_sayi=rastgele;
	}
	SayilariRastgeleTablosunaYaz();
	SonucTipiSec();
	
}



  /*Sonuç tipine karar veriyoruz
   0==> Verilen aralıkta herhangi bir değer bulduğunda çıkmak için
   1==> Hedef sayıya en yakın değeri bulmak iç,in sonuna kadar gider 
   */
function SonucTipiSec()
{
var sonuc_radio = document.getElementsByName('sonuc_radio');
sonuc_tipi=0;
if (sonuc_radio[1].checked) {sonuc_tipi=1;}
	
}


/*Rasgtgele sayı dizisindeki sayılar ve hedef sayılar bir tabloda kullanıcya gösteriliyor
*/
function SayilariRastgeleTablosunaYaz()
{
       
        document.getElementById("s1_td").innerHTML=rastgele_sayilar[0].toString();
		document.getElementById("s2_td").innerHTML=rastgele_sayilar[1].toString();
		document.getElementById("s3_td").innerHTML=rastgele_sayilar[2].toString();
		document.getElementById("s4_td").innerHTML=rastgele_sayilar[3].toString();
		document.getElementById("s5_td").innerHTML=rastgele_sayilar[4].toString();
		document.getElementById("s6_td").innerHTML=rastgele_sayilar[5].toString();
		document.getElementById("shedef_td").innerHTML=hedef_sayi.toString();		
		document.getElementById("sonuc_mesaji").innerHTML="Soru çözülüyor lütfen bekleyiniz . . .";
		
		//Çözüm aşamasına geçmeden yeniden bir tıklamayı engellemek için butonlar pasif yapılıyor
		ButonlariPasifYap();  
		//Uzun süreli işlemden dolayı sayfanın donmasını engellemek için zaman verip çözüm1.adıma geçiliyor
		setTimeout(Cozum_Adim_1, 500);		
}

/* Ödev örneklerinde verilen sayı setleri hazır data olarak sunuluyor  
*/
function TestDataKullan() {
var radios = document.getElementsByName('optradio');
var test_sayilar;
	for (var i = 0, length = radios.length; i < length; i++)
	{
		if (radios[i].checked) {       
			test_sayilar=radios[i].value;
			break;
		}
	}
  rastgele_sayilar=new Array();
  rastgele_sayilar[0]=test_sayilar.split(",")[0];
  rastgele_sayilar[1]=test_sayilar.split(",")[1];
  rastgele_sayilar[2]=test_sayilar.split(",")[2];
  rastgele_sayilar[3]=test_sayilar.split(",")[3];
  rastgele_sayilar[4]=test_sayilar.split(",")[4];
  rastgele_sayilar[5]=test_sayilar.split(",")[5];
  hedef_sayi=test_sayilar.split(",")[6];
  SayilariRastgeleTablosunaYaz();  
  SonucTipiSec();
}


function ButonlariPasifYap()
{
  var tablo= document.getElementById("sonuc_tbl");
   tablo.innerHTML="";
   var btn_rastgele=document.getElementById("btn_rastgele");
   var btn_testdata=document.getElementById("btn_testdata");
   var btn_sayigir=document.getElementById("btn_sayigir");
   var btn_yakinsonuc=document.getElementById("btn_yakinsonuc");
	 
	   btn_rastgele.disabled=true;
	   btn_testdata.disabled=true;
	   btn_sayigir.disabled=true;
	   
}
//işlemlerin sonuna gelindiğinde yeni bir sorgu için butonlar aktifleştiriliyor
function ButonlariAktifYap()
{
   var btn_rastgele=document.getElementById("btn_rastgele");
   var btn_testdata=document.getElementById("btn_testdata");
   var btn_sayigir=document.getElementById("btn_sayigir");
   var btn_yakinsonuc=document.getElementById("btn_yakinsonuc");
	 
	   btn_rastgele.disabled=false;
	   btn_testdata.disabled=false;
	   btn_sayigir.disabled=false;
	    
}

/**** DİKKAT*****
	GİRİLEN SAYILAR İLE İLGİLİ HERHANGİ BİR VALİDASYON YAPILMADI
	Girilen sayıların "a,b,c,d,e,f,gh,xyz" formatında olması beklenmektedir
	*/
function SayiGirisiYap() 
{
    var test_sayilar = prompt("Lütfen test değerlerini giriniz", "2,7,3,4,8,50,100");
	
    if (test_sayilar != null) 
	{  		  		
	      rastgele_sayilar=new Array();
		  rastgele_sayilar[0]=test_sayilar.split(",")[0];
		  rastgele_sayilar[1]=test_sayilar.split(",")[1];
		  rastgele_sayilar[2]=test_sayilar.split(",")[2];
		  rastgele_sayilar[3]=test_sayilar.split(",")[3];
		  rastgele_sayilar[4]=test_sayilar.split(",")[4];
		  rastgele_sayilar[5]=test_sayilar.split(",")[5];
		  hedef_sayi=test_sayilar.split(",")[6];
		  SayilariRastgeleTablosunaYaz(); 
    }
	SonucTipiSec();
}





function Cozum_Adim_1()
{

		    BulunanEnIyiSonuc = new Array();//İsabetli sonuçların tutulduğu dizi. başlangıçta boş    
            	
            sonuc_bulundu=false; 			
            var sayi_adeti = rastgele_sayilar.length;
            var formul = "";
            BulunanEnIyiSonuc[0]=formul+"="+"0";		
			
			 //1-2 elemanlı işlemler
		    BirinciHesapListesi = new Array();//
            for (var i = 0; i < sayi_adeti; i++)
            {
                var indis1 = "0";
                var indis2 = (i + 1).toString();
                formul = "( " + rastgele_sayilar[i] + " )";
                sonuc = rastgele_sayilar[i];
				BirinciHesapListesi[i]=indis1 + ";" + indis2 + ";" + formul + ";" + "0";              
                
            }
			
			for (var k = 0; k < sayi_adeti; k++)
            {
                for (var l = 0; l < sayi_adeti; l++)
                {
				    if(sonuc_bulundu){continue;}
                    if (l != k)
                    {
						var indis1 = (k + 1).toString();
                        var indis2 = (l + 1).toString();
						//DörtişlemYap
						
						formul = "( ".concat(rastgele_sayilar[k], "*", rastgele_sayilar[l], " )");                       
                        sonuc = parseFloat(rastgele_sayilar[k]) * parseFloat(rastgele_sayilar[l]);
						//Çarpmanın değişme özelliği
						if(BirinciHesapListesi.indexOf(indis2 + ";" + indis1 + ";" + "( " + rastgele_sayilar[l] + "*" + rastgele_sayilar[k] + " )" + ";" + sonuc)==-1)
                        {
						BirinciHesapListesi[BirinciHesapListesi.length]=(indis1 + ";" + indis2 + ";" + formul + ";" + sonuc);
                        SonucKontrolEt(formul,sonuc); 
						}
						if(sonuc_bulundu){continue;}
                        formul = "( ".concat(rastgele_sayilar[k], "+", rastgele_sayilar[l], " )");
                        sonuc = parseFloat(rastgele_sayilar[k]) + parseFloat(rastgele_sayilar[l]);
						//Toplamanın değişme özelliği
						if(BirinciHesapListesi.indexOf(indis2 + ";" + indis1 + ";" + "( " + rastgele_sayilar[l] + "+" + rastgele_sayilar[k] + " )" + ";" + sonuc)==-1)
						{
                        BirinciHesapListesi[BirinciHesapListesi.length]=(indis1 + ";" + indis2 + ";" + formul + ";" + sonuc);
                        SonucKontrolEt(formul,sonuc);
						}
						if(sonuc_bulundu){continue;}
                        formul = "( ".concat(rastgele_sayilar[k], "-", rastgele_sayilar[l], " )");
                        sonuc = parseFloat(rastgele_sayilar[k]) - parseFloat(rastgele_sayilar[l]);
                        BirinciHesapListesi[BirinciHesapListesi.length]=(indis1 + ";" + indis2 + ";" + formul + ";" + sonuc);
                        SonucKontrolEt(formul,sonuc);
						
						if(sonuc_bulundu){continue;}
                        formul = "( ".concat(rastgele_sayilar[k], "-", rastgele_sayilar[l], " )");
                        sonuc = parseFloat(rastgele_sayilar[k]) / parseFloat(rastgele_sayilar[l]);
                        BirinciHesapListesi[BirinciHesapListesi.length]=(indis1 + ";" + indis2 + ";" + formul + ";" + sonuc);
                        SonucKontrolEt(formul,sonuc);
						
                    }
                }
            }						
			setTimeout(Cozum_Adim_2, 500);		
		
}
function Cozum_Adim_2()
{
			//3-4 elemanlı işlemler
			IkinciHesapListesi= new Array();
            var ikili_permutasyon_sayisi = BirinciHesapListesi.length;

            for (var i = 0; i < ikili_permutasyon_sayisi; i++)
            {
			    
		    	if(sonuc_bulundu){continue;}
                var birinci_liste_ara_sonuc = BirinciHesapListesi[i];
                var sonuc1 = parseFloat(birinci_liste_ara_sonuc.split(';')[3]);
                var formul1 = birinci_liste_ara_sonuc.split(';')[2];
                var indisler = new Array ( parseFloat(birinci_liste_ara_sonuc.split(';')[0]), parseFloat(birinci_liste_ara_sonuc.split(';')[1]) );


                for (var j = 0; j < ikili_permutasyon_sayisi; j++)
                {
				    if(sonuc_bulundu){continue;}
                    var ikinci_ara_sonuc = BirinciHesapListesi[j].toString();
                    var indis1 = parseFloat(ikinci_ara_sonuc.split(';')[0]);
                    var indis2 = parseFloat(ikinci_ara_sonuc.split(';')[1]);
                    if (indisler.indexOf(indis1)==-1 && indisler.indexOf(indis2)==-1)
                    {
                        var sonuc2 = parseFloat(ikinci_ara_sonuc.split(';')[3]);
                        var formul2 = ikinci_ara_sonuc.split(';')[2];
						
                        formul = formul1 + " * " + formul2;
                        sonuc = sonuc1 * sonuc2;						
                        IkinciHesapListesi[IkinciHesapListesi.length]=(indisler[0] + ";" + indisler[1] + ";" + indis1 + ";" + indis2 + ";" + formul + ";" + sonuc);
                        SonucKontrolEt(formul,sonuc);
						if(sonuc_bulundu){continue;}
                        formul = formul1 + " + " + formul2;
                        sonuc = sonuc1 + sonuc2;
                        IkinciHesapListesi[IkinciHesapListesi.length]=(indisler[0] + ";" + indisler[1] + ";" + indis1 + ";" + indis2 + ";" + formul + ";" + sonuc);
                        SonucKontrolEt(formul,sonuc);
						if(sonuc_bulundu){continue;}
                        formul = formul1 + " - " + formul2;
                        sonuc = sonuc1 - sonuc2;
                        IkinciHesapListesi[IkinciHesapListesi.length]=(indisler[0] + ";" + indisler[1] + ";" + indis1 + ";" + indis2 + ";" + formul + ";" + sonuc);
                        SonucKontrolEt(formul,sonuc);
                        if(sonuc_bulundu){continue;}
                        formul = formul1 + " / " + formul2;
                        sonuc = sonuc1 / sonuc2;
                        IkinciHesapListesi[IkinciHesapListesi.length]=(indisler[0] + ";" + indisler[1] + ";" + indis1 + ";" + indis2 + ";" + formul + ";" + sonuc);
                        SonucKontrolEt(formul,sonuc);
                    }
                }
            }          
     setTimeout(Cozum_Adim_3, 500);        
}
function Cozum_Adim_3()
{
 //5-6 elemanlı işlemler
            var dortlu_permutasyon_sayisi = IkinciHesapListesi.length;
            var ikili_permutasyon_sayisi = BirinciHesapListesi.length;
            for (var i = 0; i < dortlu_permutasyon_sayisi; i++)
            {		
   			    if(sonuc_bulundu){continue;}
                var birinci_liste_ara_sonuc = IkinciHesapListesi[i];
                var sonuc1 = parseFloat(birinci_liste_ara_sonuc.split(';')[5]);
                var formul1 = birinci_liste_ara_sonuc.split(';')[4];
				var indisler = new Array ( parseFloat(birinci_liste_ara_sonuc.split(';')[0]),
										   parseFloat(birinci_liste_ara_sonuc.split(';')[1]),
										   parseFloat(birinci_liste_ara_sonuc.split(';')[2]),
										   parseFloat(birinci_liste_ara_sonuc.split(';')[3])
										   );   				
                for (var j = 0; j < ikili_permutasyon_sayisi; j++)
                {
                    var ikinci_ara_sonuc = BirinciHesapListesi[j].toString();
                    var indis1 = parseFloat(ikinci_ara_sonuc.split(';')[0]);
                    var indis2 = parseFloat(ikinci_ara_sonuc.split(';')[1]);
                    if (indisler.indexOf(indis1)==-1 && indisler.indexOf(indis2)==-1)
					
                    {
					    var sonuc2 = parseFloat(ikinci_ara_sonuc.split(';')[3]);
                        var formul2 = ikinci_ara_sonuc.split(';')[2];                       		
											
						formul = "( "+formul1 + " ) * " + formul2;					
                        sonuc = sonuc1 * sonuc2;
                        SonucKontrolEt(formul,sonuc);
						
                        if(indisler.indexOf(0)>-1)
						{
						    var eksikindis=21-indis1-indis2;                            
							for(var ind=0;ind<4 ;ind++){ eksikindis -= indisler[ind]; }							                                                 
						    Cozum_Adim_4(formul,sonuc,rastgele_sayilar[eksikindis-1]);						
						}												

                        formul = "( "+formul1 + " ) + " + formul2;
                        sonuc = sonuc1 + sonuc2;
                        SonucKontrolEt(formul,sonuc);
						  if(indisler.indexOf(0)>-1)
						{
						    var eksikindis=21-indis1-indis2;                            
							for(var ind=0;ind<4 ;ind++){ eksikindis -= indisler[ind]; }							                                                 
						    Cozum_Adim_4(formul,sonuc,rastgele_sayilar[eksikindis-1]);						
						}

                        formul = "( "+formul1 + " ) - " + formul2;
                        sonuc = sonuc1 - sonuc2;
                        SonucKontrolEt(formul,sonuc);
						  if(indisler.indexOf(0)>-1)
						{
						    var eksikindis=21-indis1-indis2;                            
							for(var ind=0;ind<4 ;ind++){ eksikindis -= indisler[ind]; }							                                                 
						    Cozum_Adim_4(formul,sonuc,rastgele_sayilar[eksikindis-1]);						
						}		

                        formul = "( "+formul1 + " ) / " + formul2;
                        sonuc = sonuc1 / sonuc2;
                        SonucKontrolEt(formul,sonuc);
						if(indisler.indexOf(0)>-1)
						{
						    var eksikindis=21-indis1-indis2;                            
							for(var ind=0;ind<4 ;ind++){ eksikindis -= indisler[ind]; }							                                                 
						    Cozum_Adim_4(formul,sonuc,rastgele_sayilar[eksikindis-1]);						
						}		  
                    }					
                }				
            }
 ButonlariAktifYap(); 
 
 var tablo= document.getElementById("sonuc_tbl");

 var eniyifark=Math.abs(hedef_sayi-parseFloat(BulunanEnIyiSonuc[0].split('=')[1]));
 if(eniyifark<hedef_sayi)
 {
 document.getElementById("sonuc_mesaji").innerHTML="Sonuç bulundu . . .";
 tablo.innerHTML="<tr class='info'><td>"+BulunanEnIyiSonuc[0].split('=')[0]+" =</td><td>"+BulunanEnIyiSonuc[0].split('=')[1]+"</td><td>"+eniyifark+"</td></tr> ";  
 }
 else
 {    
    document.getElementById("sonuc_mesaji").innerHTML="Herhangi bir sonuç bulunamadı . . .";
 }
 
}
function Cozum_Adim_4(formul,sonuc,sonsayi)
{           
            var yeniformul="";
			var yenisonuc;
			yeniformul = "( " +formul + " )  * ( " + sonsayi + " )";
            yenisonuc = sonuc * parseFloat(sonsayi);
            SonucKontrolEt(yeniformul, yenisonuc);
			if(!sonuc_bulundu)
			{
			yeniformul = "( "+formul + " )  + ( " + sonsayi + " )";
            yenisonuc = sonuc + parseFloat(sonsayi);
            SonucKontrolEt(yeniformul, yenisonuc);			
			}
			if(!sonuc_bulundu)
			{
			yeniformul = "( "+formul + " )  - ( " + sonsayi + " )";
            yenisonuc = sonuc - parseFloat(sonsayi);
            SonucKontrolEt(yeniformul, yenisonuc);
			}
			if(!sonuc_bulundu)
			{
			yeniformul = "( "+formul + " )  / ( " + sonsayi + " )";
            yenisonuc = sonuc / parseFloat(sonsayi);
            SonucKontrolEt(yeniformul, yenisonuc);
			}
  
}


function SonucKontrolEt(formul,sonuc)
{       
      var fark=Math.abs(sonuc-hedef_sayi);	  
	  //aralıkta bir sonuç bulunura  arama sonlandırılıyor
	  if(sonuc_tipi==0)
	  {
		  if(fark<hassasiyet)
		  {	  
		  BulunanEnIyiSonuc[0]=formul+"="+sonuc;		  
		  sonuc_bulundu=true;	  
		  }
	      return false;
	  }
	  //sonuna kadar gidip tam sonuç veya en yakınsonucu bulmaya çalışıyoruz
	  else
	  {  
	      if(fark==0)
		  {		  	
		     BulunanEnIyiSonuc[0]=formul+"="+sonuc;
		     sonuc_bulundu=true;		    
			 return false;
		  }		  
		  else
		  {
			 var yenifark=hedef_sayi-parseFloat(BulunanEnIyiSonuc[0].split('=')[1]);
			 if(fark<yenifark && fark<hassasiyet)
			 {
			 BulunanEnIyiSonuc[0]=formul+"="+sonuc;			
			 }			  
		  }	  
	  }
}





