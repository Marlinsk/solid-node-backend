import { PostEnity } from "../../../entities/Post";
import { handleError } from "../../../errors/handeError";
import { IPostRepository } from "../../../repositories/IPostRepository";

export class FindAllPostsUseCase {
  constructor(private postRepository: IPostRepository) { }

  async execute(): Promise<PostEnity[]> {
    const findAll = await this.postRepository.findAll();

    if (findAll.length === 0) {
      throw new handleError("Not found", 404);
    }

    return findAll;
  }
}