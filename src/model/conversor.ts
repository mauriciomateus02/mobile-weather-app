export const conversor = (date?: string) => {

    var mes;
    var data = date?.split('/', 2);

    switch (data?.[1]) {
        case '01':
            mes = 'Jan';
            break;
        case '02':
            mes = 'Feb';
            break;
        case '03':
            mes = 'Mar';
            break;
        case '04':
            mes = 'Apr';
            break;
        case '05':
            mes = 'May';
            break;
        case '06':
            mes = 'Jun';
            break;
        case '07':
            mes = 'Jul';
            break;
        case '08':
            mes = 'Aug';
            break;
        case '09':
            mes = 'Sep';
            break;
        case '10':
            mes = 'Oct';
            break;
        case '11':
            mes = 'Nov';
            break;
        case '12':
            mes = 'Dec';
            break;
        default:
            mes = 'Undefined';
            break;
    }
    return mes+', '+data?.[0];
}

export const conversorColor = (condition?: string) =>{

    if(condition == 'clear_day' || condition == 'cloudly_day'){ 
        return ['#29B2DD','#33AADD','#2DC8EA'];
    }
    else{
        return ['#08244F','#134CB5','#0B42AB'];   
    }
}

export const conversorColorContainer = (condition?: string) =>{

    if(condition == 'clear_day' || condition == 'cloudly_day'){ 
        return '#1654AB';
    }
    else{
        return '#011D43';   
    }
}

