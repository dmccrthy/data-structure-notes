/**
 * Linked list implementation in Java
 * @author Dan McCarthy
 * @version 1.0.0
 */
public class LinkedList {
    private int value;
    private LinkedList next;

    public LinkedList(int val, LinkedList nex) {
        value = val;
        next = nex;
    }

    public LinkedList getNext() {
        return next;
    }
}