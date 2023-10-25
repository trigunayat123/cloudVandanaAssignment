import java.util.*;

public class ShuffleArray {
	public static void main(String args[]) {
		int arr[] = { 1, 2, 3, 4, 5, 6, 7 };
		System.out.println("Array before Shuffling");
		print(arr);
		shuffle(arr);
		System.out.println("Array after Shuffling");
		print(arr);
	}

	public static void shuffle(int arr[]) {
		Random rand = new Random();

		for (int i = arr.length - 1; i > 0; i--) {
			int j = rand.nextInt(i + 1);
			int temp = arr[i];
			arr[i] = arr[j];
			arr[j] = temp;
		}
	}

	static void print(int arr[]) {
		for (int i = 0; i < arr.length; i++)
			System.out.print(arr[i] + " ");
		System.out.println();
	}
}
