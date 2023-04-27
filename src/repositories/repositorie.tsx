export async function request<TRespost>(
    url: string,
    config: RequestInit
):Promise<TRespost>{
    try{
    const resposta = await fetch(url,config);
    return await resposta.json();
    }
    catch(error){
        console.log(error);
    }
}