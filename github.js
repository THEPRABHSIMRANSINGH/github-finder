class GitHub{
  constructor(){
    this.client_id='d38d741f64a8aea12676';
    this.client_secret='c895cda2a22ef6c4fefcde5fc16d440f4527e861';
    
    this.repos_count=5;
    this.repso_sort='created: asc';

  }
 async getUser(user){
   const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
   console.log(profileResponse);
   const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repso_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

   const profile= await profileResponse.json();
   const repos= await reposResponse.json();
   return{
    profile,
    repos
   }
 }

}