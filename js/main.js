const ReceviedOriginalPrice = +prompt("Enter the value :");

// vat adding function impliment
const AddVat = (OriginalPrice = 0, vat = 15) => {
  const VatAddedPrice = OriginalPrice + OriginalPrice * (vat / 100);
  const vatdetails = [VatAddedPrice, vat];
  return vatdetails;
};

// Discount function impliment
const DiscountPrice = (VatAddedPrice = 0, Discount = 15) => {
  const WithDiscountPrice = VatAddedPrice - VatAddedPrice * (Discount / 100);
  const DiscountInfo = [WithDiscountPrice, Discount];
  return DiscountInfo;
};

// make a display function
const display = (
  PactualPrice,
  PvatwithPrice,
  Pvat,
  PdiscountPrice,
  PdiscountRate
) => {
  document.getElementById(`class`).innerHTML = `
        -----------------------Invoice----------------------- <br>
             Actual Price   : ${PactualPrice} Taka <br>
             Vat            : ${Pvat}% <br>
             Vat With Price : ${PvatwithPrice} Taka <br>
        ----------------------------------------------------- <br>
        ----------------------------------------------------- <br>
             Discount Rate  : ${PdiscountRate}% <br>
             Discount Price : ${Math.round(PdiscountPrice)} Taka <br>
        ----------------------------------------------------- <br>
    `;
};

const ReciveVatdetails = AddVat(ReceviedOriginalPrice, 10);
const RecieveDiscountInfo = DiscountPrice(ReciveVatdetails[0], 15);
display(
  ReceviedOriginalPrice,
  ReciveVatdetails[0],
  ReciveVatdetails[1],
  RecieveDiscountInfo[0],
  RecieveDiscountInfo[1]
);
console.log(RecieveDiscountInfo);
