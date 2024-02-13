function DataDisplay({data}){
    return(
      <div class="card" style={{width:"25rem", margin:"10px"}}>
        <div class="card-body">
          <h5 class="card-title">{data.userId}</h5>
          <h6 class="card-subtitle mb-2 text-body-secondary">{data.title}</h6>
          <p class="card-text">{data.body}</p>
        </div>
      </div>
    )
}
export default DataDisplay  