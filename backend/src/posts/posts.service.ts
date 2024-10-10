import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Post, PostDocument } from './schemas/posts.schemas';
import {format} from 'date-fns';

@Injectable()
export class PostsService {
  constructor(@InjectModel(Post.name) private postModel:Model<PostDocument>) {}
  private formatDate(date: Date): string {
    return format(date, 'yyyy-MM-dd HH:mm:ss');  // Standard SQL format
  }

  async create(createPostDto: CreatePostDto): Promise<Post> {
    const result = new this.postModel(
      {
        ...createPostDto,
        created_at: this.formatDate(new Date()),
        last_updated_at: this.formatDate(new Date())
      }
    );
    return result.save();
  }

  async findAll(): Promise<Post[]> {
    return this.postModel.find().exec();
  }

  findOne(id: number) {
    return `This action returns a #${id} post`;
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    return `This action updates a #${id} post`;
  }

  remove(id: number) {
    return `This action removes a #${id} post`;
  }
}
