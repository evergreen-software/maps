export const locationService = {
    locations: [],
    resolveLookups(items) {  
        var context = this;      
        items.forEach(item => {
            item.fromLocation = this.locations.find(p=>p.mapsLocationId == item.fromLocationId);
            item.toLocation = this.locations.find(p=>p.mapsLocationId == item.toLocationId);
        });

        var froms = items.filter(p=>!p.fromLocation).map(p=>p.fromLocationId);
        var tos = items.filter(p=>!p.toLocation).map(p=>p.toLocationId);
        tos = tos.concat(froms);
        if(tos && tos.length){
            var resolvedEndpoint = "https://localhost:5000/api/maps/location/list?locations=" + tos;
            $.ajax({
                url: resolvedEndpoint,
                dataType: "json",
                contentType: "application/json",
                success: function(json){
                    context.resolveLookupsHandler(json, items);
                }
            });
        }
    },
    resolveLookupsHandler(locations, items){
        locations.forEach(location => {
            this.locations.push(location);
            items.forEach(p=>{
                if(p.fromLocationId === location.mapsLocationId){
                    p.fromLocation = {
                        placeId: location.placeId,
                        description: location.text 
                    };
                }
                if(p.toLocationId === location.mapsLocationId){
                    p.toLocation = {
                        placeId: location.placeId,
                        description: location.text 
                    };
                }
            });
        });
    }
}

export default {
    locationService,
}
