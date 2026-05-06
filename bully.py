class Bully:
    def __init__(self,processes,coordinator=None):
        self.coordinator = coordinator or max(processes)
        self.processes = processes

    def is_alive(self,process_id):
        return process_id in self.processes
    
    def hold_election(self, initiator):
        print(f"{initiator} starts the election")
        highest_processes = [p for p in self.processes if p > initiator]

        if not highest_processes:
            self.coordinator = initiator
            print(f"{initiator} is new coordinator")

        else:
            for p in highest_processes:
                print(f"{initiator} sends election message to {self.processes}")

            response = [p for p in highest_processes if self.is_alive(p)]

            if response:
                print(f"Processes {initiator} gets responses from {response}")
                highest = max(response)
                self.hold_election(highest)
            else:
                self.coordinator = initiator
                print(f"No higher processes{initiator} becomes ")


processes = [1,2,3,5,6]
bully = Bully(processes)
bully.hold_election(3)