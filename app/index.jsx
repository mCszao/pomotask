import { useRef, useState } from "react";
import Timer from "../components/Timer"
import {Image, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import TimerButton from './../components/TimerButton';
import ActionButton from "./../components/ActionButton";
import stages from "../data-stage";
import Input from './../components/Input';
import TaskItem from './../components/TaskItem';

export default function Index() {
  const [timerType, setTimerType] = useState(stages[0]);
  const [seconds, setSeconds] = useState(stages[0].initialValue);
  const [start, setStart] = useState(false);
  const timer = useRef(null);
  const [tasks, setTasks] = useState([]);
  function changeTimerType(s) {
    if(s.id == timerType.id) {
      return;
    }
    setTimerType(s);
    setSeconds(s.initialValue);
    clear();
  }
  function startTimer() {
    if(timer.current){
      clear()
      return;
    }
    setStart(true);
    let id = setInterval(() => {
      setSeconds((oldstate) => {
        if(oldstate == 0) {
          clear();
          return timerType.initialValue;
        }
        return oldstate - 1;
      })
    }, 1000);
    timer.current = id;
  }
  function clear() {
    if(timer.current != null) {
      clearInterval(timer.current);
      timer.current = null;
      setStart(false);
    }
  }
  function handleAdd(newTask) {
    setTasks([...tasks, { label: newTask, done: false }]);
  }
  function handleDelete(taskName) {
    const index = tasks.findIndex(item => item.label === taskName);
    if (index > -1) {
        const listClone = [...tasks];
        listClone.splice(index, 1);
        setTasks(listClone);
    }
  }

  function handleDoneUpdate(taskName) {
    const index = tasks.findIndex(item => item.label === taskName);
    if (index > -1) {
        const listClone = [...tasks];
        listClone[index].done = !listClone[index].done;
        setTasks(listClone);
    }
}
  return (
    <View
      style={styles.container}
    >
      <Text style={styles.bold}>PomoTask</Text>
      <ScrollView style={styles.tasks}>
      <Input onAdd={handleAdd} />
        {tasks.map((task, index) => (
          <TaskItem
            key={index}
            task={task}
            onDelete={handleDelete}
            onDoneUpdate={handleDoneUpdate}
        />
        ))}
      </ScrollView>
      <ScrollView style={styles.actions}>
        <View style={styles.stages}>
          {stages.map(stage => (
            <ActionButton key={stage.id} displayName={stage.displayName} active={stage.id == timerType.id} change={() => changeTimerType(stage)}/>
          ))}
        </View>
        <Timer timerValue={seconds}/>
       <TimerButton isRunning={start} func={startTimer}/>
      </ScrollView>
      <Text style={styles.bold}>Poueréd by @mcszao</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#212738",
    gap: 40
  },
  tasks: {
    backgroundColor: "#7D70BA80",
    maxHeight: "50%",
    width: "80%",
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#7D70BA",
  },
  taskItem: {
    padding: 10,
    marginBottom: 12
  },
  actions: {
    paddingVertical: 24,
    paddingHorizontal: 24,
    backgroundColor: "#7D70BA80",
    borderRadius: 32,
    borderWidth: 2,
    maxHeight: "30%",
    borderColor: "#7D70BA",
  },
  stages: {
    flexDirection: "row",
    gap: 15,
    justifyContent: "center"
  },
  bold: {
    fontWeight: "bold"
  }
})
