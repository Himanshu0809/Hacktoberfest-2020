import java.util.Scanner;

public class fibonacciseries {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		System.out.println("enter the no. of digits");
		Scanner s=new Scanner(System.in);
		int n=s.nextInt();
		int p=0;
		int firstt=0;
		System.out.println(firstt);
		int secondt=1;
		System.out.println(secondt);
		for(int i=0;i<=n-3;i++)
		{
			p=firstt+secondt;
			System.out.println(p);
			firstt=secondt;
			secondt=p;
		}
	}

}
