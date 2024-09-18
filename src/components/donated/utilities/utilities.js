function getId() {
    const savedId = localStorage.getItem('donationId')
    if(savedId){
        return JSON.parse(savedId)
    }
    return []
}
 

function toSaveId(name, gotId) {
    const prevIds = getId()
    const idExist = prevIds.find(prevId=> prevId == gotId)
    if (!idExist) {
       prevIds.push(gotId)
       localStorage.setItem(name, JSON.stringify(prevIds)) 
    }
}


export {getId, toSaveId};