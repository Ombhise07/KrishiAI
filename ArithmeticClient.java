import java.rmi.*;
import java.util.Scanner;

public class ArithmeticClient {
    public static void  main(String[] args){
        try{
            ArithmeticService arithmeticService = 
                (ArithmeticService) Naming.lookup(
                    "rmi://localhost/ArithmeticService"
                );

                Scanner sc = new Scanner (System.in);

                System.out.println("Enter first number");
                double num1 =sc.nextDouble();

                System.out.println("Enter first number");
                double num2 =sc.nextDouble();

                System.out.println("\nChoose an operation");
                System.out.println("1.Add");
                System.out.println("2.Subtract");
                System.out.println("3.Multiply");
                System.out.println("4.Divide");

                System.out.println("Enter your choice (1-4): ");
                int choice = sc.nextInt();

                double result = 0;
                switch (choice){
                    case 1 : result = arithmeticService.add(num1, num2); break;
                    case 2 : result = arithmeticService.subtract(num1, num2); break;
                    case 3 : result = arithmeticService.multiply(num1, num2); break;
                    case 4 : result = arithmeticService.divide(num1, num2); break;
                    default:
                        System.out.println("Invalid choice");
                        return;
                }

                System.out.println("Result:"+ result);
                sc.close();

        } catch(Exception e){
            e.printStackTrace();
        }
    }
}