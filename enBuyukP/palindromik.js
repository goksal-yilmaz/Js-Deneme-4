/* İki yönden de aynı şekilde okunan sayılara palindromik sayılar denir. 2 haneli 2 sayıdan oluşturulabilecek en büyük palindrom değeri 9009’dur. (91 x 99)

3 haneli iki sayıdan oluşturulabilecek en büyük palindromik sayıyı bulunuz. */








function tersCevır(value){
    let ters=value.toString();
    let valueLength = ters.length;
    let sonuc = "";
    
    for(let i = valueLength; i > 0; i--){
        sonuc += ters[i - 1];
    }

    return sonuc;
}

function enBuyukP(){
    let max = 0;

    for(let i=999; i>=100; i--){
        
        for(let j=999; j>=100; j--){

            // console.log(i, j, (i*j).toString(), tersCevır(i*j));

            if((i*j).toString() === tersCevır(i*j) && max < i*j ) {
                max = j * i;
            }
        }
    }
    
    console.log('Sayı: ', max);
}

enBuyukP();