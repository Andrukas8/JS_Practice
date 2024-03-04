
function ProfilePicture(){
    const imgUrl = "https://avatars.githubusercontent.com/u/21954163?s=400&u=c0d2592ab5eaa773c106ac1270311d0fc48b5a14&v=4"
    
    const handleClick = (e) => {
        e.target.style.display = "none";
    }
    
    return(
        <img src={imgUrl} onClick={(e) => handleClick(e)} alt="Image Url" />
    )
}

export default ProfilePicture