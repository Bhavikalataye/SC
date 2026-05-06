import 'dart:io';

// Task Class
class Task {
  String title;
  bool isCompleted;

  Task(this.title) : isCompleted = false;

  void markDone() {
    isCompleted = true;
  }

  @override
  String toString() {
    return "$title ${isCompleted ? '(Done)' : '(Pending)'}";
  }
}

// ToDo Manager Class
class ToDoList {
  List<Task> tasks = [];

  void addTask(String title) {
    tasks.add(Task(title));
    print("Task added!");
  }

  void viewTasks() {
    Fdif (tasks.isEmpty) {
      print("No tasks available.");
    } else {
      print("\nYour Tasks:");
      for (int i = 0; i < tasks.length; i++) {
        print("${i + 1}. ${tasks[i]}");
      }
    }
  }

  void completeTask(int index) {
    if (index > 0 && index <= tasks.length) {
      tasks[index - 1].markDone();
      print("Task completed!");
    } else {
      print("Invalid task number.");
    }
  }

  void deleteTask(int index) {
    if (index > 0 && index <= tasks.length) {
      tasks.removeAt(index - 1);
      print("Task deleted!");
    } else {
      print("Invalid task number.");
    }
  }
}

// Main Function
void main() {
  ToDoList todo = ToDoList();

  while (true) {
    print("\n==== TO-DO MENU ====");
    print("1. Add Task");
    print("2. View Tasks");
    print("3. Complete Task");
    print("4. Delete Task");
    print("5. Exit");

    int choice = int.parse(stdin.readLineSync()!);

    switch (choice) {
      case 1:
        print("Enter task:");
        String task = stdin.readLineSync()!;
        todo.addTask(task);
        break;

      case 2:
        todo.viewTasks();
        break;

      case 3:
        print("Enter task number:");
        int num = int.parse(stdin.readLineSync()!);
        todo.completeTask(num);
        break;

      case 4:
        print("Enter task number:");
        int del = int.parse(stdin.readLineSync()!);
        todo.deleteTask(del);
        break;

      case 5:
        print("Exit...");
        return;

      default:
        print("Invalid choice");
    }
  }
}