queue = []

def add_customer(name):
    queue.append(name)
    print(f"{name} added to queue.")

def serve_customer():
    if not queue:
        print("Queue is empty.")
        return None
    served = queue.pop(0)  # Removes from the front (FIFO)
    print(f"{served} served.")
    return served

def show_queue():
    if not queue:
        print("Queue is empty.")
    else:
        print("Queue:", queue)

# Example
add_customer("Elaine")
add_customer("Althea")
add_customer("Angelo")
show_queue()
serve_customer()
show_queue()
