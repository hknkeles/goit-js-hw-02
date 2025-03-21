// TASK-1

/*Siparişin toplam tutarını (tüm droid siparişlerinin toplam değeri) saklamak için bir değişken tanımla ve bu tutarı hesaplamak için bir ifade ata.
Müşterinin siparişi ödeyip ödeyemeyeceğini kontrol et:
Ödenecek tutar, müşterinin hesabındaki krediden fazla ise fonksiyon, "Insufficient funds!" dizesini döndürmelidir.
Aksi takdirde, işlev "You ordered <quantity> droids worth <totalPrice> credits!" dizesini döndürmelidir, burada <quantity>, sipariş edilen droid miktarıdır ve <totalPrice>, bunların toplam değeridir.*/

/*
quantity - sipariş edilen droid miktarı
pricePerDroid - bir droidin fiyatı
customerCredits - müşterinin hesabındaki toplam miktar
*/

//Fonksiyonu tanımlayalım
function makeTransaction(quantity, pricePerDroid, customerCredits){

    let totalPrice = pricePerDroid * quantity; // toplam sipariş tutarı

    if(totalPrice > customerCredits){
        return "Insufficient funds!"; 
    } 
    
    return `You ordered ${quantity} droids worth ${totalPrice} credits!`;

}

console.log(makeTransaction(5, 3000, 23000)); // "You ordered 5 droids worth 15000 credits!"
console.log(makeTransaction(3, 1000, 15000)); // "You ordered 3 droids worth 3000 credits!"
console.log(makeTransaction(10, 5000, 8000)); // "Insufficient funds!"
console.log(makeTransaction(8, 2000, 10000)); // "Insufficient funds!"
console.log(makeTransaction(10, 500, 5000)); // "You ordered 10 droids worth 5000 credits!"