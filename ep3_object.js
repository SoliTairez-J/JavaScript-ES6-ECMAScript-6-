//ทำงานกับ Object

//ตัวแปรเก็บข้อมูล
const customerName = "warawit"
const age = 23
const address = "สมุทรปราการ"

const customer = {
    customerName,
    age,
    address,
    showData(){
        console.log("ข้อมูลลูกค้า = "+customerName);
    }
}

customer.showData()