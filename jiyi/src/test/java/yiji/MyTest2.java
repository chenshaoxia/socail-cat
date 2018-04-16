package yiji;

import java.util.Scanner;

public class MyTest2 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner sc = new Scanner(System.in);
		String number = sc.nextLine();
		String baoshi=sc.nextLine();
		String[] str=baoshi.split(" ");
		int[] array=new int[str.length];
		for (int i=0;i<array.length;i++) {
			array[i]=Integer.parseInt(str[i]);
		}
		int total=0;
		int temp=0;
		int juli=0;
		for (int i = 0; i < array.length-1; i++) {
			for (int j = i+1; j < array.length; j++) {
				if (j-i<i+array.length-j) {
					juli=j-i;
				}else {
					juli=i+array.length-j;
				}
				int liang=array[i]+array[j]+juli;
				if (temp<liang) {
					temp=liang;
					total=1;
				}else if (temp==liang) {
					total++;
				}
			}
		}
		System.out.println(temp);
		System.out.println(total);
	}
}
