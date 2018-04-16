package yiji;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.Comparator;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;
import java.util.Scanner;

public class Mytest1 {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		String input = sc.next();
		int i = 1;
		char temp = input.charAt(0);
		Map<Character, Integer> map = new HashMap<Character, Integer>();
		while (i < input.length()) {
			char c = input.charAt(i);
			if (map.get(c) == null || map.get(c) < i) {
				map.put(c, i);
			}
			i++;
		}
		Comparator<Map.Entry<Character, Integer>> valueComparator = new Comparator<Map.Entry<Character, Integer>>() {
			@Override
			public int compare(Entry<Character, Integer> o1, Entry<Character, Integer> o2) {
				// TODO Auto-generated method stub
				return o1.getValue() - o2.getValue();
			}
		};
		List<Map.Entry<Character, Integer>> list = new ArrayList<Map.Entry<Character, Integer>>(map.entrySet());
		Collections.sort(list, valueComparator);
		for (Map.Entry<Character, Integer> entry : list) {
			// System.out.println(entry.getKey() + ":" + entry.getValue());
			System.out.print(entry.getKey());
		}
	}
}
