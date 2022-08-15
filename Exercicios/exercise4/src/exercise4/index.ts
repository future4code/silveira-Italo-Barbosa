




function stringwt(strings:any) {
    if(strings.length === 0) return ""
    
    let out = ""
    for(let i = 0; i < strings[0].length; i++) {
        let when = strings[0][i]
        let allSense = true
        
        for(let j = 0; j < strings.length; j++) {
            if(strs[j][i] !== when) {
                return out
            }
        }
        
        if(when) {
            out += when
        }
    }
    
    return out
};