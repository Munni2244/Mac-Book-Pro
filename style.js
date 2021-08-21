const memoryCost= document.getElementById('memory-cost');
const storageCost= document.getElementById('storage-cost');
const deliveryCost= document.getElementById('delivery-cost');

const bestPriceValue= document.getElementById('best-price');
const total =document.getElementById('total-cost');
const totalUpdatePrice= document.getElementById('update-total');

/////////.... cost calculation////////////
function getTotalCost(items){
const costValue=document.getElementById(items+'-cost');
const totalCostValue=parseInt(costValue.innerText);
const bestPriceValue= document.getElementById('best-price');

const bestPrice=parseInt(bestPriceValue.innerText);
const totalvalue= bestPrice + totalCostValue;
total.innerText=totalvalue;
}

 //////////total cost///////////////////
function getTotal(){
const total =document.getElementById('total-cost');
const bestPriceValue= document.getElementById('best-price');
const bestPrice=parseInt(bestPriceValue.innerText);
const memoryNumber= document.getElementById('memory-cost');
const memmoryValue = parseInt(memoryNumber.innerText);
const storageNumber= document.getElementById('storage-cost');
const storageValue = parseInt(storageNumber.innerText);
const deliveryNumber= document.getElementById('delivery-cost');
const deliveryValue = parseInt(deliveryNumber.innerText);
const totalCost= bestPrice + memmoryValue+ storageValue + deliveryValue;
total.innerText= totalCost;

}



// /////////memory button /////////
document.getElementById('memory1-btn').addEventListener('click', function(){
memoryCost.innerText='0';
    getTotalCost('memory');
    getTotal()
    getUpdateTotal('memory')
   });
document.getElementById('memory2-btn').addEventListener('click', function(){
memoryCost.innerText='180';
    getTotalCost('memory');
    getTotal()
    getUpdateTotal('memory')
   });

//  ////////////storage button //////////////
document.getElementById('storage1-btn').addEventListener('click', function(){
storageCost.innerText='0';
    getTotalCost('storage');
    getTotal()
    getUpdateTotal('storage')
   });
document.getElementById('storage2-btn').addEventListener('click', function(){
storageCost.innerText='100';
    getTotalCost('storage');
    getTotal()
    getUpdateTotal('storage')
   });
document.getElementById('storage3-btn').addEventListener('click', function(){
storageCost.innerText='180';
    getTotalCost('storage');
    getTotal()
    getUpdateTotal('storage')
   });


//  /////////////  delivery button /////////
document.getElementById('delivery1-btn').addEventListener('click', function(){
deliveryCost.innerText='0';
getTotalCost('delivery');
getTotal()
getUpdateTotal('delivery')
 });

 document.getElementById('delivery2-btn').addEventListener('click', function(){
 deliveryCost.innerText='20';
 getTotalCost('delivery');
 getTotal()
 getUpdateTotal('delivery')
 });


//////////update bounas part //////////
function getUpdateTotal(){
    const totalUpdate =document.getElementById('update-total');
    const bestPriceValue= document.getElementById('best-price');
    const bestPrice=parseInt(bestPriceValue.innerText);
    const memoryNumber= document.getElementById('memory-cost');
    const memmoryValue = parseInt(memoryNumber.innerText);
    const storageNumber= document.getElementById('storage-cost');
    const storageValue = parseInt(storageNumber.innerText);
    const deliveryNumber= document.getElementById('delivery-cost');
    const deliveryValue = parseInt(deliveryNumber.innerText);
    const totalCost= bestPrice + memmoryValue+ storageValue + deliveryValue;
    totalUpdate.innerText= totalCost; 
}


///////////////pomo code//////////////////

function getPomoCode(){
const updatePomoNUmber= document.getElementById('update-total');
const UpdatePomoValue = parseInt(updatePomoNUmber.innerText);
const pomoCodeValue = document.getElementById('pomo-input');
const pomoCode= pomoCodeValue.value;
if(pomoCode=='stevekaku'){
    const pomoValue= (UpdatePomoValue*(20/100));
    updatePomoNUmber.innerText= UpdatePomoValue-pomoValue;
}
pomoCodeValue.value='';

}

document.getElementById('apply-btn').addEventListener('click', function(){
    getPomoCode();
})

