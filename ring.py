class RingAlgorithm:

    def __init__(self, processes):
        self.processes = sorted(processes)
        self.ring = self.processes[:]
        self.coordinator = None

    def is_alive(self, process_id):
        return process_id in self.processes
    
    def hold_election(self, initiator):

        print(f"{initiator} sends election msg")
        election_list = [initiator]
        current_index = self.ring.index(initiator)

        while True:
            current_index = (current_index + 1) % len(self.ring)
            next_process = self.ring[current_index]

            if next_process == initiator:
                break

            print(f"process {election_list[-1]} sends to {next_process}")

            election_list.append(next_process)
        
        winner = max(election_list)
        self.coordinator = winner
        print(f"{winner} is new coordinator")

processes = [1,2,3,4,5,6]
ring = RingAlgorithm(processes=processes)
ring.hold_election(3)