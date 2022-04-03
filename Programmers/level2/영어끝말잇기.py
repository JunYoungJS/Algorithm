def solution(n, words):
    answer = []
    speak_word=set()

    turn_people=1
    turn=1
    prev=""
    while len(words)!=0:
          word=words.pop(0)
          if word in speak_word or (prev!="" and prev!=word[0]):
              answer.append(turn_people)
              answer.append(turn)
              break
          else:
               speak_word.add(word)
               prev=word[len(word)-1]

          if turn_people % n == 0:
              turn += 1
              turn_people = 1
              continue

          turn_people+=1


    if len(answer)==0:
        return [0,0]
    else:
        return answer


solution(2,["hello", "one", "even", "never", "now", "world", "draw"])