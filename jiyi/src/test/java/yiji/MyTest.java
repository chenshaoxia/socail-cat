package yiji;

import java.util.Comparator;
import java.util.Iterator;
import java.util.Map;
import java.util.Scanner;
import java.util.Set;
import java.util.TreeMap;


public class MyTest {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		String input = sc.next();
		String[] number = input.split("\\+");
		Map<Integer, Integer> map = new TreeMap<Integer, Integer>(new Comparator<Integer>() {

			@Override
			public int compare(Integer o1, Integer o2) {
				// TODO Auto-generated method stub
				return o1.compareTo(o2);
			}
		});
		for (String str : number) {
			int i = Integer.parseInt(str);
			if (map.get(i) == null) {
				map.put(i, 1);
			} else {
				map.put(i, map.get(i) + 1);
			}
		}
		Set<Integer> keySet=map.keySet();
		Iterator<Integer> iterator=keySet.iterator();
		int result1=0;
		StringBuilder result=new StringBuilder();
		while (iterator.hasNext()) {
			int key=iterator.next();
			result.append(key+"*"+map.get(key)+"+");
			result1+=key*map.get(key);
		}
		result.deleteCharAt(result.length()-1);
		System.out.println(result);
		System.out.println(result1);
	}
}
