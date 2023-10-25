
import java.util.*;

public class RomanToInteger {

	public static void main(String args[]) {
		Scanner sc = new Scanner(System.in);
		System.out.println("Enter Roman Number");
		String s = sc.nextLine();
		System.out.println("Roman to Integer is : " + romanToInteger(s));
	}

	public static int romanToInteger(String s) {
		HashMap<String, Integer> map = new HashMap();
		map.put("I", 1);
		map.put("V", 5);
		map.put("X", 10);
		map.put("L", 50);
		map.put("C", 100);
		map.put("D", 500);
		map.put("M", 1000);
		int sum = map.get(s.substring(s.length() - 1, s.length()));
		for (int i = s.length() - 2; i >= 0; i--) {
			if (map.get("" + s.charAt(i)) < map.get("" + s.charAt(i + 1)))
				sum -= map.get(s.charAt(i) + "");
			else
				sum += map.get(s.charAt(i) + "");
		}
		return sum;
	}
}