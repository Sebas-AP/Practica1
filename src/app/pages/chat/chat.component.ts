import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ChatService } from '../../services/chat.service';
@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {
  userInput = new FormControl('');
  isLoading = false;
  recommendations: string[] = [];
  errorMessage = '';

  constructor(private chatService: ChatService) {}

  getRecommendations() {
    const input = this.userInput.value;
    if (!input || input.trim() === '') {
      this.errorMessage = 'Please enter your preferences';
      return;
    }

    this.isLoading = true;
    this.errorMessage = '';
    this.recommendations = [];

    this.chatService.getRecommendations(input).subscribe({
      next: (response: any) => {
        const content = response.choices[0]?.message?.content;
        if (content) {
          this.recommendations = content.split('\n').filter((line: string) => line.trim() !== '');
        }
        this.isLoading = false;
      },
      error: (err) => {
        this.errorMessage = 'Failed to get recommendations. Please try again.';
        console.error(err);
        this.isLoading = false;
      }
    });
  }

  clearChat() {
    this.userInput.setValue('');
    this.recommendations = [];
    this.errorMessage = '';
  }
}