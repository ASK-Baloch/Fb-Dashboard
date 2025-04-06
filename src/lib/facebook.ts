export class FacebookClient {
    private accessToken: string;
  
    constructor(accessToken: string) {
      this.accessToken = accessToken;
    }
  
    async getGroups() {
      const response = await fetch(
        `https://graph.facebook.com/v19.0/me/groups?fields=name,member_count,icon&access_token=${this.accessToken}`
      );
      return response.json();
    }
  
    async getPosts() {
      const response = await fetch(
        `https://graph.facebook.com/v19.0/me/feed?fields=id,message,created_time&access_token=${this.accessToken}`
      );
      return response.json();
    }
  }
  