import { Injectable } from '@angular/core';
import { SupabaseService } from './supabase.service';

@Injectable({
  providedIn: 'root'
})
export class RecordService {
  constructor(private supabaseService: SupabaseService) { }

  async createTask(title: string, description: string) {
    const { data, error } = await this.supabaseService.getSupabase()
      .from('tasks')
      .insert({ title, description, is_complete: false });
    return { data, error };
  }

  async getTasks() {
    const { data, error } = await this.supabaseService.getSupabase()
      .from('tasks')
      .select('*');
    return { data, error };
  }

  async updateTask(id: number, is_complete: boolean) {
    const { data, error } = await this.supabaseService.getSupabase()
      .from('tasks')
      .update({ is_complete })
      .eq('id', id);
    return { data, error };
  }

  async deleteTask(id: number) {
    const { error } = await this.supabaseService.getSupabase()
      .from('tasks')
      .delete()
      .eq('id', id);
    return { error };
  }
}
