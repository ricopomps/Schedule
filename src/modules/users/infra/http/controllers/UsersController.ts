class UsersControllers {
  public async create(request: HttpRequest) {
    const { name } = request.body;

    return { statusCode: 200, body: '' };
  }
}

export default new UsersControllers();
