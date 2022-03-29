class Node:
    def __init__(self,data):
        self.data=data
        self.prev=None
        self.next=None
        self.removed=False




def solution(n, k, cmd):
    answer = ''
    node_list=[]
    stack=[]
    for i in range(n):
        node_list.append(Node(i))

    cur_pos=node_list[k]
    for i in range(1,n):
        node_list[i-1].next=node_list[i]
        node_list[i].prev=node_list[i-1]

    for i in cmd:
        if i[0]=='D':
            n=int(i[2:])
            for _ in range(n):
                cur_pos=cur_pos.next

        elif i[0]=='U':
             n=int(i[2:])
             for _ in range(n):
                 cur_pos=cur_pos.prev

        elif i[0]=='C':
             stack.append(cur_pos)
             cur_pos.removed=True
             up=cur_pos.prev
             down=cur_pos.next

             if up:
                 up.next=down

             if down:
                 down.prev=up
                 cur_pos=down
             else:
                 cur_pos=up


        elif i[0]=='Z':
             newnode=stack.pop()
             newnode.removed=False
             up=newnode.prev
             down=newnode.next

             if up:
                up.next=newnode
             if down:
                down.prev=newnode


    for i in node_list:
        if i.removed==True:
            answer+='X'
        else:
            answer+='O'




    return answer




solution(8,2,["D 2","C","U 3","C","D 4","C","U 2","Z","Z"])