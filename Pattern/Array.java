import java.util.Scanner;

public class Array {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int[] arr = new int[50]; // Fixed size array
        int n, choice, pos, value;

        System.out.print("Enter the number of elements: ");
        n = sc.nextInt();

        System.out.println("Enter the elements:");
        for (int i = 0; i < n; i++) {
            arr[i] = sc.nextInt();
        }

        do {
            System.out.println("\n----- Array Operations Menu -----");
            System.out.println("1. Display Array");
            System.out.println("2. Insert Element");
            System.out.println("3. Delete Element");
            System.out.println("4. Update Element");
            System.out.println("5. Exit");
            System.out.print("Enter your choice: ");
            choice = sc.nextInt();

            switch (choice) {
                case 1:
                    System.out.println("Array elements:");
                    for (int i = 0; i < n; i++) {
                        System.out.print(arr[i] + " ");
                    }
                    System.out.println();
                    break;

                case 2:
                    System.out.print("Enter position to insert (0 to " + n + "): ");
                    pos = sc.nextInt();
                    if (pos < 0 || pos > n) {
                        System.out.println("Invalid position.");
                        break;
                    }
                    System.out.print("Enter value to insert: ");
                    value = sc.nextInt();
                    for (int i = n; i > pos; i--) {
                        arr[i] = arr[i - 1];
                    }
                    arr[pos] = value;
                    n++;
                    System.out.println("Element inserted successfully.");
                    break;

                case 3:
                    System.out.print("Enter position to delete (0 to " + (n - 1) + "): ");
                    pos = sc.nextInt();
                    if (pos < 0 || pos >= n) {
                        System.out.println("Invalid position.");
                        break;
                    }
                    for (int i = pos; i < n - 1; i++) {
                        arr[i] = arr[i + 1];
                    }
                    n--;
                    System.out.println("Element deleted successfully.");
                    break;

                case 4:
                    System.out.print("Enter position to update (0 to " + (n - 1) + "): ");
                    pos = sc.nextInt();
                    if (pos < 0 || pos >= n) {
                        System.out.println("Invalid position.");
                        break;
                    }
                    System.out.print("Enter new value: ");
                    value = sc.nextInt();
                    arr[pos] = value;
                    System.out.println("Element updated successfully.");
                    break;

                case 5:
                    System.out.println("Exiting program.");
                    break;

                default:
                    System.out.println("Invalid choice. Please try again.");
            }
        } while (choice != 5);

        sc.close();
    }
}