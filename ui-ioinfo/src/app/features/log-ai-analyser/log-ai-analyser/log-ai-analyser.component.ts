import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { LogAiAnalyserService } from '../../../../services/log-ai-analyser.service';
import { MatTabChangeEvent } from '@angular/material/tabs';

@Component({
  selector: 'log-ai-analyser',
  templateUrl: './log-ai-analyser.component.html',
  styleUrls: ['./log-ai-analyser.component.scss']
})
export class LogAiAnalyserComponent implements OnInit {

  public sidebarShow: boolean = true;
  logs: any[] = [];
  selectedSection: string = 'logDetails';
  frontendError: any[] = [];
  msgs: any[] = [];
  inputText = '';
  tempInput = '';
  classifiedLogs: any[] = [];

  constructor(
    private cd: ChangeDetectorRef,
    private logAiAnalyserService: LogAiAnalyserService
  ) { }

  ngOnInit(): void {


    this.logAiAnalyserService.fetchBackendLogs().subscribe({
      next: (res) => {
        const rawLogs = Array.isArray(res) ? res : Object.values(res);
        this.logs = rawLogs.map((log: any) => {
          try {
            return typeof log === 'string' ? JSON.parse(log) : log;
          } catch (e) {
            console.error('Invalid log JSON:', log);
            return null;
          }
        }).filter(log => log !== null);

        console.log("Parsed Logs:", this.logs);
        this.cd.detectChanges();
      },
      error: (err) => {
        console.error('Frontend fetch error:', err);

        const extractedError = {
          message: err?.message || 'Unknown error',
          stack: err?.error?.stack || '',
          name: err?.name || 'UnknownError',
          service: 'LogAiAnalyserService',
          status: err?.status || 0,
          statusText: err?.statusText || 'Unknown Error',
          url: err?.url || '',
          level: 'ERROR'
        };


        this.logAiAnalyserService.logFrontendError(extractedError);

        this.logs = [];
        this.cd.detectChanges();
      },
      complete: () => {
        console.log('Log fetch completed.');
      }
    });


    this.logAiAnalyserService.fetchFrontEndErrorLogs().subscribe((res: any) => {
      console.log("Raw Response:", res);

      // Parse each log and filter out invalid entries
      this.frontendError = res.map((log: any) => {
        try {
          return typeof log === 'string' ? JSON.parse(log) : log;
        } catch (e) {
          console.error('Invalid log JSON:', log);
          return null;
        }
      }).filter((log: any) => log !== null); // <-- fixed syntax

      console.log("Parsed Logs:", this.frontendError);
      this.cd.detectChanges();
    });


    this.getDiscussions();
    this.getClassifiedLogs();

  }
  getDiscussions() {

    this.logAiAnalyserService.getDiscussion().subscribe((res: any) => {
      console.log("All discussion Response:", res);

      this.msgs = res.map((log: any) => {
        try {
          return typeof log === 'string' ? JSON.parse(log) : log;
        } catch (e) {
          console.error('Invalid log JSON:', log);
          return null;
        }
      }).filter((log: any) => log !== null); // <-- fixed syntax

      console.log("Parsed Logs:", this.msgs);
      this.cd.detectChanges();
    });
  }


  selectedTabIndex = 0;

  onTabChange(event: MatTabChangeEvent) {
    console.log('Tab changed to index:', event.index);
  }


  async discussions() {
    this.tempInput = this.inputText;

    if (!this.inputText.trim()) return;

    // let result = JSON.stringify(this.msgs);
    // console.log(result);    
    let data = {

      message: this.inputText,
      timestamp: new Date().toISOString(), // ISO format for Java Instant
      reply: ''

    }

    console.log(data);

    this.logAiAnalyserService.discussions(data).subscribe((res: any) => {
      console.log("Raw Response:", res);

    });
    this.inputText = '';
    this.cd.detectChanges();
    await this.sleep(10000); // wait for 10 seconds
    this.tempInput = '';
    this.getDiscussions();

  }

  startNewDiscussion() {
    this.logAiAnalyserService.clearAllDiscussions().subscribe((res: any) => {
      console.log("All discussions cleared --> ", res);
    });
    this.msgs = [];
    this.cd.detectChanges();
  }

  sleep(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  getClassifiedLogs() {

    this.logAiAnalyserService.getClassifiedLogs().subscribe((res: any) => {
      console.log("All discussion Response:", res);

      this.classifiedLogs = res.map((log: any) => {
        try {
          return typeof log === 'string' ? JSON.parse(log) : log;
        } catch (e) {
          console.error('Invalid log JSON:', log);
          return null;
        }
      }).filter((log: any) => log !== null); // <-- fixed syntax

      console.log("Parsed Logs:", this.classifiedLogs);
      this.cd.detectChanges();
    });
    
  }

}
