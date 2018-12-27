firebase.database().ref("sellers/sellers-list/" + <%= seller%>).on('value', function (snap) {%>
console.log(snap.val());
}) 