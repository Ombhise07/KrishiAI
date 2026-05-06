import threading
import time
import random

class TokenAlgorithm:

    def __init__(self,num_processes):
        self.token = True
        self.num_processes = num_processes
        self.current_holder = 0
        self.lock = threading.Lock()
        self.running = True

    def critical_section(self,process_id):
        print(f"{process_id} Entering CS")
        time.sleep(random.uniform(1,2))
        print(f"{process_id} exiting CS")

    def request_token(self,process_id):

        while self.running:
            with self.lock:
                if self.current_holder == process_id and self.token:
                    self.critical_section(process_id)
                    self.token = False
                    self.current_holder = (process_id + 1) % self.num_processes
                    self.token = True
            time.sleep(1)

    def start(self):
        threads = []

        for i in range(self.num_processes):
            t = threading.Thread(target=self.request_token,args=(i,))
            threads.append(t)
            t.start()

        try:
            while True:
                time.sleep(0.1)
        except KeyboardInterrupt:
            self.running = False
            print("Stopping")
            for t in threads:
                t.join()
                

ring = TokenAlgorithm(5)
ring.start()