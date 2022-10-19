function doFirst(){
    let area = document.getElementById('map')
    let position = new google.maps.LatLng(25.04276923170026,121.52491031999084)
    let options = {
        zoom: 14,
        center: position,
        // mapTypeId: google.maps.MapTypeId.ROADMAP
        mapTypeId: google.maps.MapTypeId.TERRAIN
        // mapTypeId: google.maps.MapTypeId.SATELLITE
        // mapTypeId: google.maps.MapTypeId.HYBRID
    }
    let map = new google.maps.Map(area,options)

    let marker = new google.maps.Marker({
        position,
        map,
        // title: '這是哪裡?',
        // icon: '../../images/foot.gif',
    })
    marker.setTitle('TGD102')
    marker.setIcon('../../images/number/dgtp.gif')

} 



window.addEventListener('load', doFirst)

// layers
// controls
// services