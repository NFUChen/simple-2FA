from threading import Thread
import random
import string
import time

class TwoFactorAuth:
    def __init__(self) -> None:
        self.current_pwd = self._generate_random_4_digit_chars()
        self.expire_time = 30
        self.current_time = self.expire_time
        
        self._start_thread()
    
    @property
    def progress(self) -> float:
        return (1 - (self.current_time / self.expire_time)) * 100
        
    def _generate_random_4_digit_chars(self) -> str:
        random_chars = random.choices(string.digits, k=4)
        return ''.join(random_chars)

    def _start_thread(self) -> None:
        def wrapper() -> None:
            while (True):
                if (self.current_time <= 0):
                    self.current_pwd = self._generate_random_4_digit_chars()
                    self.current_time = self.expire_time
                    continue
                time.sleep(1)
                self.current_time -= 1

        thread = Thread(target=wrapper)
        thread.start()

    def to_dict(self) -> dict[str, str | int]:
        data_dict = self.__dict__
        data_dict["progress"] = int(self.progress)
        return data_dict
    
    def is_valid_password(self, password: str) -> bool:
        return self.current_pwd == password