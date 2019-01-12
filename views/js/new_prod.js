function add_product(){
    let cat = document.getElementById("cat").value;
    let prod_name = document.getElementById("prod_name").value;
    let gender =  document.querySelector('input[name="gender"]:checked').value;
    let size = document.getElementById("size").value;
    let qty = document.getElementById("qty").value;
    let prices = document.getElementById("prices").value;
    let file = document.getElementById("photo").files[0];
    var uid = firebase.auth().currentUser.uid;
    var produpdate = "categories/" + cat + "/" + prod_name;
    var userupdate = "sellers/seller_wise/" + uid + "/" + cat + "/" + prod_name;
    // console.log(cat,prod_name,gender,size,qty,prices,file)
    

    
    // console.log(referral);
    const ref = firebase.storage().ref()

    const file_name = file.name;
    const metadata = {contentType:file.type};

    const task = ref.child(file_name).put(file,metadata);
    task.then( snap => snap.ref.getDownloadURL())
    .then(url => {
        console.log("hello");
        var obj = {
            gender: gender,
            avl_sizes: size,
            avl_qty: qty,
            prices: prices,
            url: url
        }
        var seller_info = {
            gender: gender,
            avl_sizes: size,
            avl_qty: qty,
            prices: prices,
            imageUrl: url,
            sold_by:uid
        }
        firebase.database().ref(userupdate).set(obj);
        firebase.database().ref(produpdate).set(seller_info);
        document.getElementById("prod_name").value = null;
        document.getElementById("size").value = null;
        document.getElementById("qty").value = null;
        document.getElementById("prices").value = null;
        document.getElementById("photo").value = null;    
        });
       
        
    
}